const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_URL || !STRAPI_API_TOKEN) {
  throw new Error(
    `Missing Strapi configuration in environment variables. STRAPI_API_URL: ${STRAPI_API_URL}, STRAPI_API_TOKEN: ${
      STRAPI_API_TOKEN ? "defined" : "undefined"
    }`
  );
}

export async function fetchFromStrapi<T>(endpoint: string): Promise<T> {
  const url = `${STRAPI_API_URL}${endpoint}`;

  // Validate URL
  try {
    new URL(url);
  } catch (urlError) {
    console.error("Invalid Strapi API URL:", url, urlError);
    throw new Error(
      `Invalid URL: ${url}. Check your STRAPI_API_URL environment variable.`
    );
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
      tags: [endpoint],
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from Strapi: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getAboutPage<T>(): Promise<T> {
  try {
    // Strapi v5 uses populate=* instead of populate=deep
    const data = await fetchFromStrapi<{ data: T }>("/about-page?populate=*");
    return data.data;
  } catch (error) {
    console.error("Error fetching about page:", error);
    throw error;
  }
}

export async function getHomePage<T>(): Promise<T> {
  try {
    // Strapi v5 uses populate=* instead of populate=deep
    const data = await fetchFromStrapi<{ data: T }>(
      "/home-page?populate[needs]=*&populate[reasons][populate]=*&populate[services][populate]=*&populate[testimonials]=*"
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error;
  }
}

export async function getCoursesPage<T>(): Promise<T> {
  try {
    const data = await fetchFromStrapi<{ data: T }>("/courses?populate=*");
    return data.data;
  } catch (error) {
    console.error("Error fetching courses page:", error);
    throw error;
  }
}

export async function getAnalyticsPage<T>(): Promise<T> {
  try {
    const data = await fetchFromStrapi<{ data: T }>("/analytics?populate=*");
    return data.data;
  } catch (error) {
    console.error("Error fetching analytics page:", error);
    throw error;
  }
}
