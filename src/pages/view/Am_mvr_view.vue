<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item mb-2">
        <button
          class="btn btn-danger"
          @click="$router.push('/admin/amvrfeedback')"
        >Go back <span class="fa fa-times"></span></button>
      </div>
      <div class="md-layout-item md-size-100">
        <div
          class="card"
          style="padding: 20px;"
        >

          <div
            id="form-fields"
            class="card-content"
          >
            <div class="form-group row">
              <label
                for="staticEmail"
                class=" col-xs-4 col-sm-4 col-form-label"
              >Visitor's
                Name</label>
              <div
                id="1"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Date</label>
              <div
                id="2"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Location
                Visited</label>
              <div
                id="3"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Manager(s)
                on
                Duty</label>
              <div
                id="4"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Day of
                Week</label>
              <div
                id="5"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <th>Category</th>
                <th>Points Earned</th>
                <th>Possible Points</th>
                <th>Percent</th>
              </thead>
              <tbody>
                <tr>
                  <td>Opening Procedures</td>
                  <td
                    id="77"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>35</td>
                  <td
                    id="78"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Staff Issues</td>
                  <td
                    id="79"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>15</td>
                  <td
                    id="80"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Production Management</td>
                  <td
                    id="81"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>40</td>
                  <td
                    id="82"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>HACCP Compliance</td>
                  <td
                    id="83"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>50</td>
                  <td
                    id="84"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Hygiene & Cleanliness</td>
                  <td
                    id="85"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>65</td>
                  <td
                    id="86"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Customer Experience</td>
                  <td
                    id="87"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>60</td>
                  <td
                    id="88"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>

              </tbody>
              <tfoot class="total">
                <tr>
                  <th>TOTALS</th>
                  <th
                    id="89"
                    class="points ans"
                  >
                    <p></p>
                  </th>
                  <th>265</th>
                  <th
                    id="90"
                    class="percent ans"
                  >
                    <p></p>
                  </th>
                </tr>
              </tfoot>
            </table>
            <h5 class="subtitle">Comments</h5>
            <div class="form-group">
              <label
                for="inputPassword"
                class="form-label"
              >The 5 top things this
                restaurant did very
                well:</label>
              <div
                id="58"
                class="ans"
              >
                <p class="form-box"></p>

              </div>
            </div>
            <div class="form-group">
              <label
                for="inputPassword"
                class="form-label"
              >The 5 top things that could be
                improved: </label>
              <div
                id="59"
                class="ans"
              >
                <p class="form-box"></p>
              </div>
            </div>
            <div class="form-group">
              <label
                for="inputPassword"
                class="form-label"
              >Food & Beverage Comments &
                Observations: </label>
              <div
                id="60"
                class="ans"
              >
                <p class="form-box"></p>
              </div>
            </div>
            <div class="form-group">
              <label
                for="inputPassword"
                class=" form-label"
              >General Comments &
                Observations:</label>
              <div
                id="61"
                class="ans"
              >
                <p class="form-box"></p>
              </div>
            </div>
          </div>
          <div class="row ">
            <div
              v-for="(img, index) in images"
              v-bind:key="index"
              class="col-4 h-25"
            >
              <img
                :src="'http://qa.sundryhrms.website'+img"
                class="img-fluid"
                style="height: 200px;"
              >
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

      images: []
    };
  },
  mounted () {
    this.getForm(this.$route.params.id);

  },
  methods: {
    getForm (id) {
      var recent = {
        what: "ammvrview",
        // showLoader: "no",
        params: {
          form_id: id
        }
      };

      this.$socket
        .makeGetRequest(recent)
        .then(response => {
          if (response.type == "ammvrview") {
            // console.log(response)
            for (let i = 0; i <= 100; i++) {
              response.data.forEach(item => {
                if (i == item.questionno) {
                  // console.log(item)
                  if (item.questionno == "3") {
                    // console.log(item.answers)
                    let stores = this.$store.getters.stores
                    stores.forEach(j => {
                      if (j.id == item.answers) {
                        item.answers = j.address + ", " + j.location;

                      }
                    })
                  }
                  document.getElementById(i).querySelectorAll("p")[0].innerHTML = item.answers

                }
              });
            }
            this.images = response.images;
            // this.images = Object.values(response.images);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style scoped>
.form-box {
  border: 1px solid #dee2e6;
  height: 120px;
  padding: 5px;
}
</style>
