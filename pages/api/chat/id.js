export default async function handler(req, res) {

  const id = process.env.ch_engine_projectID;
  console.log(typeof id)
  if(typeof id === 'string') {
    const rr = res.status(200).json(id)
    console.log(typeof rr)
    const rrr = JSON.stringify(rr)
    console.log(rrr)
  }
  return
}