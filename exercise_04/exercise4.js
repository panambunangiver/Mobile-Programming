//Panambunan Giver G.A

// 1.Promise
function helloworld1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    });
  }, 2000);
}

async function messages() {
  console.log("Messages");
  const msg = await helloworld1();
  setTimeout(() => {
    console.log(msg);
  }, 2000);
}

messages();

// // 2.Fetch
fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((users) => console.log(users));

// 3. Async Await
const ambilDataUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

ambilDataUser();

// Object Class
class orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
  bekerja() {
    console.log(`${this.nama} sedang bekerja seperti biasa`);
  }
  tidur() {
    console.log(`${this.nama} sedang tidur`);
  }
  makan() {
    console.log(`${this.nama} sedang makan`);
  }
}
// // //5.Inheritance
const user1 = new orang("Giver", "21");
user1.bekerja();
class pelajar extends orang {
  constructor(nama, umur, namasekolah) {
    super(nama, umur);
    this.namasekolah = namasekolah;
  }
  belajar() {
    console.log(`${this.nama} sedang belajar di
${this.namasekolah}`);
  }
}
const user = new pelajar("Jhon", "17", "Unklab");
user.belajar();
