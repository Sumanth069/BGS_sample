export default function ImagePreview({ file }) {
  if (!file) return <p style={{ opacity: 0.7 }}>No image selected yet.</p>;
  return <p>Selected image: <strong>{file.name}</strong></p>;
}
