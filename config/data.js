let api_host = 'https://kapi-s.hhc.hilton.com/hospitality-internal-all/v2';
let credentials = {
    "client_id": "P_C_lXzbgf85zH4TYY5snTnMSpYa",
    "client_secret": "86J5tjba3ZihTaEAY2CCTdwcyEMa"
};

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
let db = {
    user: 'qe_b2b_auto',
    password: '27HlWg!5',
    host: 'corexdbsr00ueua.cluster-cay06ixag7je.us-east-1.rds.amazonaws.com',
    port: '5432',
    database: 'b2b-stg',
}
export { api_host, credentials, axiosConfig , db}
