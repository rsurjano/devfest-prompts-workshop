#!/bin/bash

# Create directories for optimized images
mkdir -p optimized

# Run the Node.js script for image optimization
node optimize-images.js

echo "Images optimized and converted to WebP format."
