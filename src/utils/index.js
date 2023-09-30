export function formatRating(rating) {
  // Check if the rating is a whole number
  if (Number.isInteger(rating)) {
    return rating.toString();
  }

  // If the rating is not a whole number, round it to one decimal place
  return rating.toFixed(1);
}

export function extractYear(dateString) {
  // Extract the year from the date string
  return dateString.split("-")[0];
}
