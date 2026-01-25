export function Footer() {
  return (
    <footer className="py-8 bg-background-dark text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest font-light">
          &copy; {new Date().getFullYear()} LUZ GUFFANTI | TODOS LOS DERECHOS
          RESERVADOS
        </p>
      </div>
    </footer>
  );
}
