# Useful commands

## Convert GIFs to MP4 

These flags are required for max compatibility and prevent corrupt output.

```
ffmpeg -i animated.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" video.mp4
```