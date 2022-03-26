// City API
export const fetchPlace = async (text) => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=pk.eyJ1IjoieWhlbWllZmFqIiwiYSI6ImNsMTBtMzB6eTBlbDkzZG14bDAzNG0xZHEifQ.a0ltMpDslI4Y6j2zJ1KahQ&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};
