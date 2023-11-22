interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {   // reopening of the interface
  githubToken: string;
}

interface Admin extends User {   // inheritence
  role: "admin" | "ta" | "learner";
}

const tikka: Admin = {
  role: "admin",
  dbId:23,
  githubToken: "git",
  email:"t@t.com",
  userId: 13,
  startTrial: () => {
    return "Trial has started!"
  },
  getCoupon(name: "tikka", off: 10) {
      return off 
  },
}
tikka.email = "heyo@t.com"
// tikka.dbId = 33 wont work bc readonly

console.log(tikka.getCoupon("a",1))

export{}
