import Head from 'next/head'
import * as colors from '../components/colors'

export default ({
  children
}) => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    { children }
    <style jsx global>{`
html {
  font-size: 18px;
	font-size: calc(112.5% + 2 * (100vw - 600px) / 400);
}
body {
  line-height: 1.333333333rem;
	font-family: system, "-apple-system", "-webkit-system-font", BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "freesans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
pre {
  font-family: monospace;
}
h1 {
  font-size: 2rem;
  margin-top: 1em;
  margin-bottom: 1em;
}
h2 {
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
input {
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.dark};
}
input:focus {
  border: 1px solid ${colors.key};
  outline-color: ${colors.key};
}
button {
  padding: 0 0.5em;
  border: none;
  color: ${colors.light};
  background: ${colors.dark};
}
button.active {
  color: ${colors.dark};
  background: ${colors.key};
}
button:focus {
  color: ${colors.key};
  outline-color: ${colors.key};
}
button.active:focus {
  color: ${colors.light};
}

main {
  padding-bottom: 2rem;
}
main > * {
  max-width: 30rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: auto;
	margin-right: auto;
}

.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 1rem;
}
`}</style>
  </main>
)