const happyBirthday = (name: string, age?: number): void => {
  if (!age) {
    console.log(`Happy Birthday, ${name}`);
  } else {
    console.log(`Happy ${age} Birthday, ${name}`);
  }
};

happyBirthday("Jesus", 33); // Happy 33 Birthday, Jesus
happyBirthday("Mark"); // Happy Birthday, Mark
