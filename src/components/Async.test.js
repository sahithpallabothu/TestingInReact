import { render,screen } from "@testing-library/react"
import Async from "./Async"


describe('Async Componen',()=>{

    test('Async Loading of values',async ()=>{
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({ 
            json:async () => [{id:'p1',title:'First Post'}]
        })
        render(<Async/>);

        const liElements = await screen.findAllByRole('listitem',{exact:false},{timeout:5000});
        expect(liElements).not.toHaveLength(0);
    })

    test('Async Loading of empty array values',async ()=>{
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({ 
            json:async () => []
        })
        render(<Async/>);
        let expectedAry = [];
        const liElements = await screen.queryAllByRole('listitem',{exact:false});
        expect(liElements).toEqual([]);
    })
})