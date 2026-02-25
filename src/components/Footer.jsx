const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Venkata Nihar Billakurthi</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
