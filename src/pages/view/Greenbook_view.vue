<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item mb-2">
        <button
          class="btn btn-danger"
          @click="$router.push('/admin/kdo')"
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
              >VISITOR'S NAME</label>
              <div
                id="1"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="staticEmail"
                class=" col-xs-4 col-sm-4 col-form-label"
              >UNIT</label>
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
                class=" col-xs-4 col-sm-4 col-form-label"
              >DATE</label>
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
                class=" col-xs-4 col-sm-4 col-form-label"
              >LOCATION VISITED</label>
              <div
                id="4"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>

            <table class="table table-bordered">
              <thead>
                <th></th>
                <th>AM</th>
                <th>PM</th>
                <th></th>
              </thead>
              <thead>
                <th>CAR PARK & EXTERIOR</th>
                <th>Yes/No</th>
                <th>Yes/No</th>
                <th>Comments/Remarks</th>
              </thead>
              <tbody>
                <tr>
                  <td>Is the car park clean and free of weeds and Algae?</td>
                  <td
                    id="5"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="6"
                    class="ans"
                  >
                    <p></p>
                  </td>

                  <td
                    id="7"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the Exterior Signages clean and free of Cobwebs?</td>
                  <td
                    id="8"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="9"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="10"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the Exterior Signages ON/OFF?</td>
                  <td
                    id="11"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="12"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="13"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the Exterior signages/Pylon lights damaged?</td>
                  <td
                    id="14"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="15"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="16"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the exterior walls and glasses clean and free of build up?</td>
                  <td
                    id="17"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="18"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="19"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>

                  <td>Are the outdoor unit clean free from debris and algae build up at the side and behind of it?</td>
                  <td
                    id="20"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="21"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="22"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>

              </tbody>

              <thead>
                <th>LOBBY AND CASH POINT</th>
                <th colspan="3"></th>
              </thead>
              <tbody>
                <tr>
                  <td>Is there a functional Air Curtain?</td>
                  <td
                    id="23"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="24"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="25"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the wall tiles clean and free of stains?</td>
                  <td
                    id="26"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="27"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="28"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the shop floor been swept and mopped?</td>
                  <td
                    id="29"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="30"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="31"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?</td>
                  <td
                    id="32"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="33"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="34"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>

                  <td>Is there a door mat present? in good condition at the entrance?</td>
                  <td
                    id="35"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="36"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="37"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the wash hand sink clean and equipped with soap and a functional hand drier?</td>
                  <td
                    id="38"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="39"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="40"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Toilet cleaned hourly according to the hourly checklist?</td>
                  <td
                    id="41"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="42"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="43"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all ACs clean and functional?</td>
                  <td
                    id="44"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="45"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="46"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all Spot lights and Insect catchers clean and functional?</td>
                  <td
                    id="47"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="48"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="49"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Lobby free of cobwebs and crawling insects?</td>
                  <td
                    id="50"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="51"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="52"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Garbage counter clean and waste Bin lined with Bin bag?</td>
                  <td
                    id="53"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="54"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="55"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Merchandizer clean in and out and free of build up?</td>
                  <td
                    id="56"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="57"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="58"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the Merchandizer bulbs Halogen Osram bulbs?</td>
                  <td
                    id="59"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="60"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="61"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Merchandizer been pre heated before food displayed?</td>
                  <td
                    id="62"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="63"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="64"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the chips dump clean and functional? Void of drop lights?</td>
                  <td
                    id="65"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="66"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="67"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is there a Sanitizer solution available at the cash point?</td>
                  <td
                    id="68"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="69"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="70"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>

              </tbody>

              <thead>
                <th>KITCHEN(BOH, FRY STATION & PASTRY) </th>
                <th colspan="3"></th>
              </thead>
              <tbody>
                <tr>
                  <td>Is the Gas Burners, pressure and deep/open fryers clean and free of build up?</td>
                  <td
                    id="71"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="72"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="73"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Dough moxer clean and free of build up?</td>
                  <td
                    id="74"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="75"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="76"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Oil checks been done using the Oil Tester?</td>
                  <td
                    id="77"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="78"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="79"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all production oven clean and free of grease build up?</td>
                  <td
                    id="80"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="81"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="82"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>

                  <td>Is the Extractor clean and free of Oil residue/build up?</td>
                  <td
                    id="83"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="84"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="85"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all induction burners clean free of moisture and oil build up?</td>
                  <td
                    id="86"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="87"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="88"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is there a Sanitizer Solution available in the Kithcen?</td>
                  <td
                    id="89"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="90"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="91"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the 3 bucket system in place and practiced?</td>
                  <td
                    id="92"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="93"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="94"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?</td>
                  <td
                    id="95"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="96"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="97"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the cold room/freezer been cleaned as per daily schedule?</td>
                  <td
                    id="98"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="99"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="100"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Have all materials in the Cold room/freezer been Code Dated?</td>
                  <td
                    id="101"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="102"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="103"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all food grade containers/basket clean labelled or code dated?</td>
                  <td
                    id="104"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="105"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="106"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Kitchen floor swept and mopped as per the daily schedule?</td>
                  <td
                    id="107"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="108"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="109"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Kitchen floor drains cleaned and cleared of build ups?</td>
                  <td
                    id="110"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="111"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="112"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all food items in the production floor placed on pallets? Elevated?</td>
                  <td
                    id="113"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="114"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="115"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Kitchen wall Tiles been cleaned as per daily schedule?</td>
                  <td
                    id="116"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="117"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="118"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Have all prepared food been sampled to check for quality, Taste and documented?</td>
                  <td
                    id="119"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="120"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="121"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all prepared products (RTE) being probed and recoeded real time?</td>
                  <td
                    id="122"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="123"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="124"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all prepared products (RTE) being recorded in the movement book real time?</td>
                  <td
                    id="125"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="126"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="127"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Have all refuse BIN been emptoied timely? (half full half empty)</td>
                  <td
                    id="128"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="129"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="130"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Pasturizer clean and free of residue?</td>
                  <td
                    id="131"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="132"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="133"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the blast freezer clean and working optimally?</td>
                  <td
                    id="134"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="135"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="136"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all additional production equipment clean and working?</td>
                  <td
                    id="137"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="138"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="139"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all cooking pots/pans in good condition and free from carbon build up?</td>
                  <td
                    id="140"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="141"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="142"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Pizza oven clean, free of residue/build up?</td>
                  <td
                    id="143"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="144"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="145"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are the chopping Boards clean amd free of build up?</td>
                  <td
                    id="146"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="147"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="148"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all WIP items placed in the chiller code Dated?</td>
                  <td
                    id="149"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="150"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="151"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?</td>
                  <td
                    id="152"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="153"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="154"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the extractor clean and free of Build up?</td>
                  <td
                    id="155"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="156"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="157"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>

              </tbody>

              <thead>
                <th>ADDITIONAL CHECKS </th>
                <th colspan="3"></th>
              </thead>
              <tbody>
                <tr>
                  <td>Is the Shawarma griller and Toaster clean and free of build up?</td>
                  <td
                    id="158"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="159"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="160"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the braine maire working and clean?</td>
                  <td
                    id="161"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="162"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="163"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all food items in the dry store placed on pallets?</td>
                  <td
                    id="164"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="165"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="166"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all items in the Dry Store code Dated?</td>
                  <td
                    id="167"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="168"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="169"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>

                  <td>Is CAYGO the order of the Day?</td>
                  <td
                    id="170"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="171"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="172"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the staff cloakroom and Toilet been clean as per the daily schedule?</td>
                  <td
                    id="173"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="174"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="175"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the Handwashing Sink equipped with running water, Soap and Paper Towel?</td>
                  <td
                    id="176"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="177"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="178"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are Staff washing their Hands intermittently?</td>
                  <td
                    id="179"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="180"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="181"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)</td>
                  <td
                    id="182"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="183"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="184"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is the back area cleaned, free of algae and unwanted items?</td>
                  <td
                    id="185"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="186"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="187"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all refuse being dumped neatly in the bin according to color code segregation?</td>
                  <td
                    id="188"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="189"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="190"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Are all staff well groomed and dressed as per policy?</td>
                  <td
                    id="191"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="192"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="193"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Morning/Afternoon stock count been carried out?</td>
                  <td
                    id="194"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="195"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="196"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Is there any material unavailability affetcing the day's Sales?</td>
                  <td
                    id="197"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="198"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="199"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the previous Day's controls been done?</td>
                  <td
                    id="200"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="201"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="202"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>
                <tr>
                  <td>Has the Food cost report been done for the previous Day?</td>
                  <td
                    id="203"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="204"
                    class="ans"
                  >
                    <p></p>
                  </td>
                  <td
                    id="205"
                    class="ans"
                  >
                    <p></p>
                  </td>

                </tr>

              </tbody>

            </table>
            <br>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Shift Manager(Morning) Name & Sign</label>
              <div
                id="206"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword"
                class="col-xs-4 col-sm-4 col-form-label"
              >Shift Manager(Afternoon) Name & Sign</label>
              <div
                id="207"
                class="col-xs-8 col-sm-8 ans"
              >
                <p class="form-control"></p>
              </div>
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
    return {};
  },
  mounted () {
    this.getForm(this.$route.params.id);
  },
  methods: {
    getForm (id) {
      var recent = {
        what: "greenbookview",
        // showLoader: "no",
        params: {
          form_id: id
        }
      };

      this.$socket
        .makeGetRequest(recent)
        .then(response => {
          if (response.type == "greenbookview") {
            for (let i = 0; i <= 300; i++) {
              response.data.forEach(item => {
                if (i == item.questionno) {
                  //   console.log(item.answers)
                  if (item.questionno == "4") {
                    let stores = this.$store.getters.stores
                    stores.forEach(j => {
                      if (j.id == item.answers) {
                        item.answers = j.address + ", " + j.location;
                      }
                    })
                  }
                  document.getElementById(i).querySelectorAll("p")[0].innerHTML = item.answers;

                }
              });
            }

            // console.log(response.data);
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
