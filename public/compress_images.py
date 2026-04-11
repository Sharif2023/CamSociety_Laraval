import os
from PIL import Image

folder = 'public/marketassets'
files = [f for f in os.listdir(folder) if f.endswith('.png')]

print(f"Found {len(files)} files to compress.")

for f in files:
    path = os.path.join(folder, f)
    img = Image.open(path)
    
    # Convert RGBA to RGB if necessary (JPG doesn't support transparency)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
        
    # Resize to max 1000px width/height while maintaining aspect ratio
    max_size = (1000, 1000)
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    
    # Save as JPG
    new_name = f.replace('.png', '.jpg')
    new_path = os.path.join(folder, new_name)
    img.save(new_path, "JPEG", quality=80, optimize=True)
    
    print(f"Compressed {f} -> {new_name} ({os.path.getsize(new_path)//1024} KB)")
    
    # Delete original PNG
    os.remove(path)

print("Done.")
