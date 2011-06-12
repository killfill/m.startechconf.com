# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join('/home/killfill/domains/libs.sofsis.cl/st/resources/themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join("..", "img")

output_style = :compressed
environment = :production
