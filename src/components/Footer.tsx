export function Footer() {
  return (
    <footer className="py-8 bg-background-dark text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Luz Guffanti. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}