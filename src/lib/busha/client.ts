/**
 * Busha API Client
 * 
 * Fetches exchange rates from the Busha API.
 * Requires BUSHA_API_KEY to be set in environment variables.
 * For Busha, the Bearer token is typically a base64 encoded string of the API key and secret.
 */

const BUSHA_API_URL = process.env.BUSHA_API_URL || "https://api.busha.co";
const BUSHA_API_KEY = process.env.BUSHA_API_KEY;

export async function getExchangeRate(base: string = "USDC", target: string = "NGN"): Promise<number | null> {
  if (!BUSHA_API_KEY) {
    console.warn("BUSHA_API_KEY is not set. Falling back to default exchange rate.");
    return null;
  }

  try {
    // Next.js fetch with 10-minute cache revalidation
    const response = await fetch(`${BUSHA_API_URL}/rates`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${BUSHA_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600, // Cache for 10 minutes (600 seconds)
      },
    });

    if (!response.ok) {
      console.error(`Busha API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // The Busha API response structure for rates
    // Assuming standard Busha rate response
    const pair = `${base}_${target}`;
    
    if (data && data.data && data.data[pair]) {
      const rate = parseFloat(data.data[pair].buy || data.data[pair].sell || data.data[pair].rate);
      if (!isNaN(rate)) {
        return rate;
      }
    }
    
    if (data && data.rates && data.rates[target]) {
      return parseFloat(data.rates[target]);
    }

    console.warn("Could not parse exchange rate from Busha response:", data);
    return null;
  } catch (error) {
    console.error("Failed to fetch exchange rate from Busha:", error);
    return null;
  }
}
