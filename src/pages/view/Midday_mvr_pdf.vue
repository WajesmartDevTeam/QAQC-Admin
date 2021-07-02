
<template>
  <div class="content">
    <vue-html2pdf
      :show-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="Qaqc-Middaymvr-Report"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      ref="html2Pdf"
      @hasDownloaded="hasDownloaded($event)"
    >
      <section slot="pdf-content">

        <section class="pdf-item card">
          <div
            id="form-fields"
            class="card-content"
            style="padding: 20px;"
          >
            <div class="	mb-4">
              <h4 class="text-bold">Midday Mvr Report</h4>
            </div>
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
                  <td>Service</td>
                  <td
                    id="96"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>75</td>
                  <td
                    id="97"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Hosting</td>
                  <td
                    id="98"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>25</td>
                  <td
                    id="99"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Production Management</td>
                  <td
                    id="100"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>45</td>
                  <td
                    id="101"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>HACCP Compliance</td>
                  <td
                    id="102"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>50</td>
                  <td
                    id="103"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Hygiene & Cleanliness</td>
                  <td
                    id="104"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>85</td>
                  <td
                    id="105"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>General Operations Management</td>
                  <td
                    id="106"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>50</td>
                  <td
                    id="107"
                    class="ans"
                  >
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>Shift Changeover</td>
                  <td
                    id="108"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td>40</td>
                  <td
                    id="109"
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
                    id="110"
                    class="points ans"
                  >
                    <p></p>
                  </th>
                  <th>370</th>
                  <th
                    id="111"
                    class="percent ans"
                  >
                    <p></p>
                  </th>
                </tr>
              </tfoot>

            </table>
          </div>
        </section>
        <section class="pdf-item card">
          <div
            class="card-content"
            style="padding: 20px;"
          >
            <div>
              <h5 class="subtitle">Comments</h5>
              <div class="form-group">
                <label
                  for="inputPassword"
                  class="form-label"
                >The 5 top things this
                  restaurant did very
                  well:</label>
                <div
                  id="78"
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
                  id="79"
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
                  id="80"
                  class="ans"
                >
                  <p class="form-box"></p>
                </div>
              </div>
            </div>
            <div class="row card-content">
              <div
                v-for="(img, index) in images"
                v-bind:key="index"
                class="col-4 h-25 mt-2"
              >
                <img
                  :src="img.answers"
                  class="img-fluid"
                  style="height: 200px;"
                >
              </div>
            </div>
          </div>

        </section>

      </section>
    </vue-html2pdf>
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
    this.getForm();
  },

  methods: {
    getForm () {
      let report = this.$store.getters.midaymvr
      report.forEach(item => {
        for (let i = 0; i <= 120; i++) {
          if (i == item.questionno) {
            // console.log(item.questiontext)
            if (item.questionno == "3") {
              let stores = this.$store.getters.stores
              stores.forEach(j => {
                if (j.id == item.answers) {
                  item.answers = j.address + ", " + j.location;

                }
              })
            }
            document.getElementById(i).querySelectorAll("p")[0].innerHTML = item.answers
          }

        };
        if (item.questionno.includes('image')) {
          this.images.push(item)
        }
      })
      this.downloadPdf()
    },
    downloadPdf () {
      this.$refs.html2Pdf.generatePdf()
    },
    hasDownloaded (e) {
      this.$router.go(-1)
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
.text-bold,
.col-form-label {
  font-weight: bold;
}
.form-control {
  background: 0 !important;
}
</style>
