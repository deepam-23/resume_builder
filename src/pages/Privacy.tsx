const Privacy = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>
          Your privacy is critically important to us. This resume builder application is designed with privacy as a top priority.
        </p>
        <h2 className="text-2xl font-semibold text-foreground pt-4">Data Storage</h2>
        <p>
          All the data you enter into the resume form—including your name, contact information, work history, and other personal details—is stored directly in your web browser's local storage.
        </p>
        <p>
          <strong>We do not have a server or a database.</strong> This means we do not collect, see, store, or have any access to your personal information. Your resume data never leaves your computer.
        </p>
        <h2 className="text-2xl font-semibold text-foreground pt-4">Data Persistence</h2>
        <p>
          The data will remain in your browser for your convenience, so you can close the tab and continue editing your resume later. To clear your data, you can clear your browser's cache and site data for this website.
        </p>
        <h2 className="text-2xl font-semibold text-foreground pt-4">Third-Party Services</h2>
        <p>
          This website does not use any third-party analytics or tracking services.
        </p>
      </div>
    </div>
  );
};

export default Privacy;