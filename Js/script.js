var nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
  
  if (nilai >= 60) {
    console.log("Tetapi Anda lulus.");
  } else {
    console.log("Anda tidak lulus.");
  }
}
