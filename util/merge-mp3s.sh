#!/bin/bash

# Function to display help
show_help() {
  echo "Usage: $0 <input_folder>"
  echo -e "\t<input_folder>: The folder containing MP3 files to process"
}

# Check for the correct number of arguments
if [ "$#" -ne 1 ]; then
  echo "Error: Wrong number of arguments."
  show_help
  exit 1
fi

# Check if the input folder exists
if [ ! -d "$1" ]; then
    echo "Error: Folder does not exist"
    exit 2
fi

# Check if the input folder is not empty
if [ -z "$(ls -A "$1")" ]; then
    echo "Error: Folder is empty"
    exit 2
fi

folder_name="$1"
output_file="${folder_name}.mp3"
output_txt_file="${folder_name}.txt"
current_time=0
files_to_merge=""

# Remove output file and txt file if they already exist
rm -f "$output_file"
rm -f "$output_txt_file"

# Iterate through the mp3 files in the input folder
for mp3_file in "${folder_name}"/*.mp3; do
    # Get the duration of the mp3 file in seconds with two decimal places
    duration=$(ffprobe -i "$mp3_file" -show_entries format=duration -v quiet -of csv="p=0")
    
    # Format the current and end times to include hours, minutes, seconds, and two decimal places
    formatted_current_time=$(printf "%02d:%02d:%06.3f" $((current_time/3600)) $(((current_time%3600)/60)) $(bc <<< "scale=2; $current_time%60"))
    end_time=$(echo "$current_time + $duration" | bc)
    formatted_end_time=$(printf "%02d:%02d:%06.3f" $((end_time/3600)) $(((end_time%3600)/60)) $(bc <<< "scale=2; $end_time%60"))

    # Append the mp3 file information to the output txt file with the formatted times
    echo "$(basename "$mp3_file");${formatted_current_time};${formatted_end_time}" >> "$output_txt_file"

    # Add the current mp3 file to the list of files to be merged
    files_to_merge="${files_to_merge}|${mp3_file}"

    # Update the current time for the next iteration
    current_time=$(echo "$end_time + 1" | bc)
done

# Remove the first "|" character from the list of files to be merged
files_to_merge=${files_to_merge#|}

# Merge all the mp3 files in the list into a single output file
ffmpeg -i "concat:${files_to_merge}" -acodec copy "$output_file"

echo "Merged mp3 file created as ${output_file}"
echo "Text file created as ${output_txt_file}"

