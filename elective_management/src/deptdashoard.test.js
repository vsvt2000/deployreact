import React from 'react';
import { shallow } from 'enzyme';
import TD from './departmentdashboard';
    describe('Department Dashboard component tests', ()=> {
        const wrapper = shallow(<TD />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button1').text()))).toMatch("\u00a0 \u00a0 Provide list");
        });

        it('should have a btn component', ()=> {
            //There should be only one button
            expect(wrapper.find('button#Button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button2').text()))).toMatch("\u00a0 \u00a0 View final student list");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button3').text()))).toMatch("\u00a0 \u00a0 Feedback Report");
        });


      

    });

















    