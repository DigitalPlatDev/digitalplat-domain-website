export default function AbuseReportPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/abuse/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/abuse/');",
        }}
      />
      <p>
        <a href="/abuse/">Continue to abuse reporting.</a>
      </p>
    </>
  );
}
