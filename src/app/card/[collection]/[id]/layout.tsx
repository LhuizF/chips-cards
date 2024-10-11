export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  );
}
