import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greetings from "./Greetings"


//test suite -- to group different tests in to a single group we can use test suite
describe('Greeting Related Functionality',()=>{
    test('Greetings Component',()=>{
        //Arrange
        render(<Greetings/>);
    
        //act 
        //do nothing here
    
        //assert
        const ele = screen.getByText('Hello !!');
        expect(ele).toBeInTheDocument();
    })

    test('Check Text Is Not Shown',()=>{
        render(<Greetings/>)

        const element = screen.getByText('No Text By Defualt');
        expect(element).toBeInTheDocument && expect()
    })

    test('Change text when button is clicked',()=>{
        render(<Greetings/>);

        const buttonEle = screen.getByRole('button');
        userEvent.click(buttonEle);
        const changedEle = screen.getByText('Hello Welcome');
        expect(changedEle).toBeInTheDocument();
    })

    test('check only one text is present after button click',()=>{
        render(<Greetings/>)
        const btnEle = screen.getByRole('button');
        userEvent.click(btnEle);
        const eleShouldNotIn = screen.queryByText('No Text By Defualt');
        expect(eleShouldNotIn).toBeNull();

    })
})

