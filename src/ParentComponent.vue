<template>
  <div>
    <h2>Parent</h2>
    <form>
        <div class="form-group">
            <label for="">Project Name</label> |
            <input type="text">
        </div>

        <div class="form-group">
            <label for="">Project Framework</label> |
            <input type="text">
        </div>
        
        <div class="form-group">
            <ChildComponent :stateArray="stateArray" :addressArray="addressArray" @name='addData($event)' @country='addData($event)'></ChildComponent>
        </div>
    </form>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
  name: "ParentComponent",
  components: {
    ChildComponent
  },

  data() {
    return {
        stateArray: [
            {
                text: 'Kathmandu',
                value: 1
            },
            {
                text: 'Bhaktapur',
                value: 2
            },
            {
                text: 'Lalitpur',
                value: 3
            },
            {
                text: 'Pokhara',
                value: 4
            },
            {
                text: 'Okhaldhunga',
                value: 5
            },
            {
                text: 'Dharan',
                value: 6
            }
        ],
        addressArray: [
            {
                text: 'Province 1',
                country_id: 1,
                code: 'PV-1'
            },
            {
                text: 'Bagmati Province',
                country_id: 2,
                code: 'BG-2'
            },
            {
                text: 'Province 3',
                country_id: 3,
                code: 'PV-3'
            },
            {
                text: 'Province 4',
                country_id: 4,
                code: 'PV-4'
            },
            {
                text: 'Province 5',
                country_id: 5,
                code: 'PV-5'
            }
        ],
        name: '',
    }
  },

  methods: {
    addData(event){
        console.log('child=>'+event);
    }
  }
};
</script>