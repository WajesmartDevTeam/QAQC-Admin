<template>
  <div
    class="wrapper"
    :class="{ 'nav-open': $sidebar.showSidebar }"
  >
    <notifications></notifications>

    <side-bar>
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link
        to="/admin/tasks"
        title="Track Action Tasks assigned"
      >
        <md-icon>dashboard</md-icon>
        <p>Task Monitor</p>
      </sidebar-link>
      <sidebar-link
        to="/admin/amvrfeedback"
        title="AM MVR Feedback Report"
      >
        <md-icon>library_books</md-icon>
        <p>AM MVR Feedback</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/openingsoa">
        <md-icon>library_books</md-icon>
        <p>AM Standard Operations</p>
      </sidebar-link> -->
      <sidebar-link
        to="/admin/midamvfeedback"
        title="MIDDAY MVR Feedback Report"
      >
        <md-icon>library_books</md-icon>
        <p>MID-DAY MVR Feedback</p>
      </sidebar-link>

      <!-- <sidebar-link to="/admin/midopeningsoa">
        <md-icon>library_books</md-icon>
        <p>MID-DAY Standard Operations</p>
      </sidebar-link> -->

      <sidebar-link
        to="/admin/krss"
        title="Food Safety Report"
      >
        <md-icon>library_books</md-icon>
        <p>Food Safety Report</p>
      </sidebar-link>

      <sidebar-link
        to="/admin/kdo"
        title="Greenbook Checklist Report"
      >
        <md-icon>library_books</md-icon>
        <p>Greenbook Checklist</p>
      </sidebar-link>
      <sidebar-link
        to="/admin/redbook"
        title="Redbook Checklist Report"
      >
        <md-icon>library_books</md-icon>
        <p>Redbook Checklist</p>
      </sidebar-link>
      <sidebar-link
        to="/admin/users"
        title="View all admins"
        v-if="this.$store.getters.role == 'superAdmin'"
      >
        <md-icon>person</md-icon>
        <p>Admin Users</p>
      </sidebar-link>
      <sidebar-link
        to="/"
        title="logout"
      >
        <span
          style="height:25px"
          @click="logout"
        >
          <md-icon>power_settings_new</md-icon>
          <p>Log out</p>
        </span>

      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter
  },
  methods: {
    logout () {
      this.$store.dispatch('logout', true)
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style>
.md-theme-default a:not(.md-button) {
  color: #ffffff !important;
}
</style>
