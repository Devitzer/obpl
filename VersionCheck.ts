// Fetch the latest version from the hosted JSON file
export default async function fetchLatestVersion(): Promise<string> {
    const response = await fetch('https://database.geodax.ca/database.json');
    const data = await response.json();
    return data.metadata.citrin.version;
  }
  