#!/bin/bash

# Function to display help
show_help() {
  echo "Usage: $0 <input_file.mp4> <chroma_key> <output_file.webm>"
  echo -e "\t<input_file.mp4>: The MP4 file to process"
  echo -e "\t<chroma_key>: Chroma key color in hexadecimal format (000000 - ffffff)"
  echo -e "\t<output_file.webm>: The output file name with a .webm extension"
}

# Check for the correct number of arguments
if [ "$#" -ne 3 ]; then
  echo "Error: Wrong number of arguments."
  show_help
  exit 1
fi

# Assign arguments to variables
input_file="$1"
chroma_key="$2"
output_file="$3"

# Check if input file exists
if [ ! -f "$input_file" ]; then
  echo "Error: Input file does not exist."
  exit 2
fi

# Validate chroma key format
if ! [[ $chroma_key =~ ^[0-9A-Fa-f]{6}$ ]]; then
  echo "Error: Chroma key must be in hexadecimal format (000000 - ffffff)."
  exit 3
fi

# Check if output file exists and if it should be overwritten
if [ -f "$output_file" ]; then
  read -p "Output file exists. Overwrite? (y/N) " answer
  case $answer in
    [Yy]* ) ;;
    * ) echo "Exiting script."; exit 4;;
  esac
fi

# Validate output file extension
if [[ $output_file != *.webm ]]; then
  echo "Error: Output file must have a .webm extension."
  exit 5
fi

# Execute ffmpeg command
ffmpeg -i "$input_file" -c:v libvpx-vp9 -vf "colorkey=0x$chroma_key:0.1:0.1,format=yuva420p" "$output_file"

echo "Processing completed successfully."

