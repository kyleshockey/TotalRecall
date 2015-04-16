# utility script for processing source images
# assumes JPEG format
# run from directory containing images only

for f in ./*; do 
  convert -verbose -strip -interlace Plane -quality 80 -limit memory 2MB -limit map 40MB $f $f; 
  convert -verbose -resize 700x464 $f $f;
done
