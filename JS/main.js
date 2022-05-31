import postAPI from './api/postAPI.js'

async function main() {

  try {
    
    const params = {
      _page:1,
      _limit:5
    }

    const response = await postAPI.getAllPost(params);
    console.log(response); 

  }catch(error) {
    console.error(error)
  }
  
}

main();