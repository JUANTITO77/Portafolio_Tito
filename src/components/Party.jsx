import styled from "styled-components";
import img1 from "../assets/img/pngwing.com (67).png"
import img2 from "../assets/img/pngwing.com (50).png"
import ContactForm from "./ContactForm";
export function Party() {
  return (<Container>
  <section class="party section" id="party">
          <div class="party__container container grid">
            <div class="party__data">
              <ContactForm/>
            </div>

            <div class="party__images">
              <img
                src={img1}
                alt="party image"
                class="party__img"
              />

              <img
                src={img2}
                alt="party image"
                class="party__star-1"
              />
              <img
                src={img2}
                alt="party image"
                class="party__star-2"
              />
            </div>
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .party{
    position: relative;
    
    &__container{
        row-gap: 5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__images{
        position: relative;
        justify-self: center;
    }
    &__img{
        width: 250px;
        filter: drop-shadow(5px 5px 3px #fcfcfc);
    }
    &__star-1,
    &__star-2{
        width: 50px;
        position: absolute;
        transform: rotate(15deg);
    }
    &__star-1{
        top: -3rem;
        left: -.5rem;
        animation: animate-star-1 5s infinite ease-in-out
    }
    &__star-2{
        right: -1.5rem;
        bottom: 2rem;
        animation: animate-star-2 5s infinite ease-in-out
    }
}
`