export const metadata = {
  title: "kirklubesit.com — Command Cockpit",
  description: "Autokirk Systems"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", margin: 0 }}>
        <div style={{ padding: 16, borderBottom: "1px solid #eee" }}>
          <b>kirklubesit.com — Command Cockpit</b>
          <span style={{ marginLeft: 12, opacity: 0.7 }}>Command Cockpit</span>
        </div>
        <div style={{ padding: 16 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
