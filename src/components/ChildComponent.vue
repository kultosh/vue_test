<template>
  <div>
    <h2>Child</h2>

    <div class="form-group">
        <label for="">Name</label> |
        <input type="text" v-model="name">
    </div>

    <div class="form-group">
        <label for="">Address</label> |
        <v-select v-model="addressSelected" :options="addressArrayData" label="text"></v-select>
    </div>

    <div class="form-group">
        <label for="">State</label> |
        <v-select v-model="stateSelected" :options="stateArrayData" label="text"></v-select>
    </div>

    <div class="form-group">
        <label for="">Age</label>
        <input type="number" v-model="age">
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    stateArray: [],
    addressArray: [],
  },
  data() {
    return {
        name: '',
        addressId: '',
        stateId: '',
        age: '',
        stateArrayData: {},
        addressArrayData: {},
        stateSelected: '',
        addressSelected: ''
    }
  },
  mounted: function() {
    // console.log(this.stateArray);
  },
  methods: {
    getState(param) {
        this.stateArrayData = param;
    },
    getAddress(param) {
        this.addressArrayData = param;
    },
    setSelectedValue(value,type) {
        if(type == 'state') {
            this.stateId = value;
        } else {
            this.addressId = value;
        }
    },
    setValue(value, type) {
        if(type == "name") {
            this.name = value;
        } else if(type == "age") {
            this.name = value;
        }
    }
  },
  watch: {
    stateArray: {
            immediate: true,
            handler(newVal, oldVal) {
                console.log(oldVal);
            if(newVal.length > 0) {
                this.getState(newVal);
            }
        }
    },

    addressArray: {
            immediate: true,
            handler(newVal, oldVal) {
                console.log(oldVal);
            if(newVal.length > 0) {
                this.getAddress(newVal);
            }
        }
    },

    stateSelected: function(val, oldVal){
        console.log(oldVal);
        this.setSelectedValue(val.value,'state');
    },

    addressSelected: function(val, oldVal){
        console.log(oldVal);
        this.setSelectedValue(val.country_id,'address');
        this.$emit('country', val.country_id);
    },

    name: function(val) {
        this.setValue(val,'name');
        this.$emit('name', val);
    },
     
    age: function(val) {
        this.setValue(val,'age');
        this.$emit('age', val);
    }
  }
};
</script>