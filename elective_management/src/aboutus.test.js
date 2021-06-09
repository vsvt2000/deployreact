import React from 'react';
import { mount } from 'enzyme';
import Aboutus from './htmlpdfsample';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Aboutus />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h1').text()).toEqual("About Us");
            
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('#slideshow')).toHaveLength(1);
            expect(wrapper.find('#descr')).toHaveLength(1);
        });
    });

















    