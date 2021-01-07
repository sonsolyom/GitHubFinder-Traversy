class Github {
  constructor(){
    this.client_id = 'f53e2bfcf52cbdae4abb';
    this.client_secret = 'f50e3612b1b0465f100cf32af4015d8917a58261';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      //profile: profile is the same
      profile 
    }
  }
}