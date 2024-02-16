import Link from "next/link";

const Subscriptions = ({data, typeSubscription}) => {
    const getPrice = (monthly_price, annual_price) => {
        const resultPrice = typeSubscription === 'Anual' ? annual_price : monthly_price;

        return resultPrice
    }
    return (
        <div>

            {data && data.map((subscription, index) => (
                <Link href={{
                    pathname: '/subscription',
                    query: {
                        id: subscription._id,
                        name: subscription.name,
                        typeSubscription,
                        mly_price: subscription.monthly_price,
                        year_price: subscription.annual_price
                    },
                }} key={index}>
                    <li key={index} className="subscription-detail">
                        <h4>{subscription.name}</h4>
                        <p>{subscription.description}</p>
                        <p>${getPrice(subscription.monthly_price, subscription.annual_price)}</p>
                    </li>
                </Link>
            ))}
        </div>
    )
}


export default Subscriptions;