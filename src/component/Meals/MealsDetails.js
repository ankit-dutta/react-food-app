import classes from './MealsDetails.module.css';

const MealsDetail = () =>{
    return(
        <>
        <section className={classes.detail}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                choose your favorite meal from our broad selection of available Meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quantity ingredints, just-in-time and
                of course by experience chefs!
            </p>
        </section>
        </>
    )
}

export default MealsDetail;