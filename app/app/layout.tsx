export const metadata = {
  title: "CivicFix AI",
  description: "App by Abhishek Tiwari"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
