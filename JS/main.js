import postAPI from './api/postAPI.js'
// import studentAPI from './api/studentAPI.js'


async function main() {

  try {
    const params = {
      _page:1,
      _limit:5
    }

    const data = await postAPI.getAllPost(params);
    console.log(data);

  }catch(error) {
    console.error(error)
  }

}

main();