import React from 'react';
import { shallow } from 'enzyme';
import AD from './admindashboard';
    describe('Admin Dashboard component tests', ()=> {
        const wrapper = shallow(<AD/>);
        
        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button1').text()))).toMatch("    View applied students list ");
        });

        it('should have a btn component', ()=> {
            //There should be only one button
            expect(wrapper.find('button#button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button2').text()))).toMatch("     View elective change students");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button3').text()))).toMatch("     Send Notifications");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button4').text()))).toEqual("     Send Notifications");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button5').text()))).toEqual("     Send Notifications");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button6').text()))).toEqual("     Send Notifications");
        });


        

    });

















    