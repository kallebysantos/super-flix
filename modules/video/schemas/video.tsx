export type VideoAsset = {
  url: string
}

export type Video = {
  id: string,
  title: string
  description: string
  thumbnail: VideoAsset
  videoContent: VideoAsset
  secondaryBackground: VideoAsset
}