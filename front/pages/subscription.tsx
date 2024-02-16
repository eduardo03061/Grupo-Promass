import Layaout from "./components/Layaout"

export default function Subscription ({id,name,typeSubscription, mly_price, year_price}){
    return (
        <>
            <Layaout>
                <div className="subscription-detail">
                    <h2>Has seleccionado la suscripcion: {name}</h2>
                    <p>Tiene un costo de ${mly_price} por mes y ${year_price} por año.</p>
                </div>
            </Layaout>
        </>
    )
}

Subscription.getInitialProps = async ({ query }) => {
    return query
}