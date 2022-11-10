const { response } = require("express");
let express = require("express");
let axios = require("axios");

let app = express();
let port = process.env.PORT || 80;


app.use(express.static("public_html"));
app.listen(port, function(){
    console.log("http://127.0.0.1/, http://localhost/")
});



app.get("/map_list", (req, res) => {
        let api = async() => {
            let response = null;
            try{
            response = await axios.get("http://apis.data.go.kr/B552584/EvCharger/getChargerInfo", {
                params: {
                    "serviceKey" : "4Ve0Xqr4jeDfDkBCtBoI55SGF4ch7vxJ1EuPHcXyV0y08eEUh%2FYuLa3O%2F2jaoqS1%2Bn%2Bbg01%2BmsWdmSTZCmLg8A%3D%3D",
                    "pageNo" : req.query.pageNo,
                    "numOfRows" : req.query.numOfRows,
                    "zcode" : req.query.zcode
                }
            })
           
        }catch(e){
        console.log(e);
        }
            return response;
        }
        api().then((response) => {
            res.setHeader("Access-Counrol-Allow-Origin", "*");
            res.json(response.data.response.body);
        });
    });