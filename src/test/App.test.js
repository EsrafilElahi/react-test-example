import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '../App'
import Header from './../components/Header';
import Count from './../components/Count';



// ==========================================
describe('>> App render', () => {

    let headerWrapper;
    let countWrapper;
    beforeEach(() => {
        headerWrapper = shallow(<Header />);
        countWrapper = shallow(<Count />);
    });

    it('title h2 ---> hello world', () => {
        const h2 = headerWrapper.find('.title')
        expect(h2.text()).toBe('Hello World')
    })
    it('paragraph ---> to Equal', () => {
        const p = headerWrapper.find('.paragraph')
        expect(p.text()).toEqual('react unit testing')
    })
    it('search btns ---> btn alert', () => {
        const btnAlert = headerWrapper.find('button')
        expect(btnAlert.at(0).props().className).toBe('alert')
    })
    it('hr ---> have class', () => {
        const hr = headerWrapper.find('hr')
        expect(hr.exists('.hr')).toBe(true)
    })
    it('props in ---> inc btn', () => {
        const btnAlert = countWrapper.find('.inc')
        expect(btnAlert.props().className).toEqual('inc')
    })
    it('btn alert ---> text', () => {
        expect(headerWrapper.find('.alert').text()).toBe("submit")
    })

})

// ==========================================
describe('>> simulate click', () => {

    let headerWrapper;
    let countWrapper;
    beforeEach(() => {
        headerWrapper = shallow(<Header />)
        countWrapper = shallow(<Count />)
    })

    test('click ---> submit', () => {
        const btnAlert = headerWrapper.find('button')
        btnAlert.simulate('click')
        expect(headerWrapper.find('.h1').text()).toBe('hey:hello')
    });
    test('h2 ---> count', () => {
        const h2 = countWrapper.find('h2')
        expect(h2.at(0).text()).toEqual('count: 0')
    })
    test('click ---> increment', () => {
        const btnInc = countWrapper.find('.inc')
        btnInc.simulate('click')
        const h2 = countWrapper.find('h2')
        expect(h2.at(0).text()).toEqual('count: 1')
    })
    test('click ---> decrement', () => {
        const btnDec = countWrapper.find('button').at(1)
        btnDec.simulate('click')
        const h2 = countWrapper.find('h2')
        expect(h2.at(0).text()).toEqual('count: -1')

    })
})

// ==========================================
describe('>> snapShots', () => {

    test('Header ---> snapShots', () => {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test('Count ---> snapShots', () => {
        const wrapper = shallow(<Count />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
