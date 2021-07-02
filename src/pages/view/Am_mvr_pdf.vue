
<template>
  <div class="content">
    <vue-html2pdf
      :show-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="Qaqc-Ammvr-Report"
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
              <h4 class="text-bold">AM Mvr Report</h4>
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
          </div>
        </section>
        <section class="pdf-item card">
          <div
            class="card-content"
            style="padding: 20px;"
          >
            <div>

              <h5 class="subtitle text-bold">Comments</h5>
              <div class="form-group">
                <label
                  for="inputPassword"
                  class="form-label text-bold"
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
                  class="form-label text-bold"
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
                  class="form-label text-bold"
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
                  class=" form-label text-bold"
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
      let report = this.$store.getters.ammvr
      report.forEach(item => {
        for (let i = 0; i <= 100; i++) {
          if (i == item.questionno) {
            if (item.questionno == "3") {
              let stores = this.$store.getters.stores
              stores.forEach(j => {
                if (j.id == item.answers) {
                  item.answers = j.address + ", " + j.location;
                }
              })
            }
            document.getElementById(i).querySelectorAll("p")[0].innerHTML = item.answers;
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
