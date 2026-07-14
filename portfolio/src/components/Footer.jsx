export default function Footer() {
  return (
    <footer className="py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm font-bold text-primary">M.Y.C</p>
        <p style={{ fontSize: '12px', color: '#9A9A9A' }}>
          &copy; {new Date().getFullYear()} Mohamed Yassine CHEBBI
        </p>
      </div>
    </footer>
  );
}
