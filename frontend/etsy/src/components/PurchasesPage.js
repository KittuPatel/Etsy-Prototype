import { useContext, useEffect, useState } from "react"
import axiosInstance from "../helpers/axiosInstance"
import { GlobalContext } from "../context/Provider"
import { useHistory } from "react-router-dom"
import Header from "./Header"
import { Dimmer, Loader } from "semantic-ui-react"

function PurchasesPage() {
  const [purchaseDeatils, setPurchaseDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { authState, globalState } = useContext(GlobalContext)
  const userId = globalState?.user?.userId
  const getAllPurchases = async () => {
    setLoading(true)
    axiosInstance()
      .get(`/users/${userId}/orders`)
      .then((response) => {
        console.log("response.data", response.data)
        setPurchaseDetails(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      history.push("/login")
    } else {
      getAllPurchases()
    }
  }, [])

  return (
    <div>
      <Header />
      <br></br>
      {loading ? (
        <div className='container' style={{ marginTop: "250px" }}>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        <div class='container' style={{ marginTop: "130px" }}>
          <h1>My Purchases</h1>
          <br></br>
          <div class='row'>
            <div class='col-12'>
              {purchaseDeatils.map((singlePurchase) => {
                return (
                  <div class='card' style='width: 500px;'>
                    <div class='row no-gutters'>
                      <div class='col-sm-5'>
                        <img
                          //   src={singlePurchase.productImage}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null // prevents looping
                            currentTarget.src =
                              "https://justbakedcake.com/wp-content/uploads/2020/09/Product_Image_Placeholder.jpg"
                          }}
                          src={
                            singlePurchase.productImage
                              ? singlePurchase.productImage
                              : "https://justbakedcake.com/wp-content/uploads/2020/09/Product_Image_Placeholder.jpg"
                          }
                          class='img-fluid img-thumbnail'
                          alt='Product Image'
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div class='col-sm-7'>
                        <div class='card-body'>
                          <h5 class='card-title'>
                            {singlePurchase.productName}
                          </h5>
                          <h6></h6>

                          <p class='card-text'>
                            {" "}
                            Order Id: {singlePurchase._id}
                          </p>
                          <p class='card-text'>
                            {" "}
                            Price: ${singlePurchase.price}
                          </p>
                          <p class='card-text'>
                            Qty: {singlePurchase.quantity}
                          </p>
                          <p class='card-text'>
                            Date: {singlePurchase.createdOn.slice(0, 10)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PurchasesPage
