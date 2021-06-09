import React from 'react';
import { shallow } from 'enzyme';
import ChangeForm from './changeform';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<ChangeForm />);

        it('should have a submit btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button2').text()))).toEqual("Submit");
        });

        it('should have a submit btn component', ()=> {

            


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('label#label2').text()))).toEqual("Desired Elective Course Code");
        });

        it('should have a submit btn component', ()=> {

            


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('label#label1').text()))).toEqual("Desired Elective Name");
        });

        it('should have a submit btn component', ()=> {

            


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('h3#head1').text()))).toEqual("Elective Change Form");
        });

       

        
        

    });

















    