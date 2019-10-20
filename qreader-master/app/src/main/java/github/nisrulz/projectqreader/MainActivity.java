/*
 * Copyright (C) 2016 Nishant Srivastava
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package github.nisrulz.projectqreader;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.android.volley.toolbox.StringRequest;

import org.json.JSONObject;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import github.nisrulz.qreader.QRDataListener;
import github.nisrulz.qreader.QREader;

public class MainActivity extends AppCompatActivity {

  private static final String cameraPerm = Manifest.permission.CAMERA;

  // UI
  private TextView text;
public int r=1;
  // QREader
  public String fn="gok";
  private SurfaceView mySurfaceView;
  private QREader qrEader;
public String result;
  boolean hasCameraPermission = false;
  StringRequest MyStringRequest;
  @Override
  protected void onCreate(final Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    hasCameraPermission = RuntimePermissionUtil.checkPermissonGranted(this, cameraPerm);

    text = findViewById(R.id.code_info);
    func1();
    final Button stateBtn = findViewById(R.id.btn_start_stop);
    // change of reader state in dynamic
    stateBtn.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        if (qrEader.isCameraRunning()) {
          stateBtn.setText("Start QREader");
          fn="gok";
          qrEader.stop();
        } else {
          stateBtn.setText("Check In");
          qrEader.start();
        }
      }
    });

    stateBtn.setVisibility(View.VISIBLE);

    Button restartbtn = findViewById(R.id.btn_restart_activity);
    restartbtn.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        restartActivity();
      }
    });

    // Setup SurfaceView
    // -----------------
    mySurfaceView = findViewById(R.id.camera_view);

    if (hasCameraPermission) {
      // Setup QREader
      setupQREader();
    } else {
      RuntimePermissionUtil.requestPermission(MainActivity.this, cameraPerm, 100);
    }
  }

  void restartActivity() {
    startActivity(new Intent(MainActivity.this, MainActivity.class));
    finish();
  }

  void setupQREader() {
    // Init QREader
    // ------------
    qrEader = new QREader.Builder(this, mySurfaceView, new QRDataListener() {
      @Override
      public void onDetected(final String data) {
        Log.d("QREader", "Value : " + data);
        result=data;
        func1();
        text.post(new Runnable() {
          @Override
          public void run() {
            text.setText(fn+" Checked In");
          }
        });
      }
    }).facing(QREader.BACK_CAM)
        .enableAutofocus(true)
        .height(mySurfaceView.getHeight())
        .width(mySurfaceView.getWidth())
        .build();
    if(result!=null)
    {
      Log.d("QREader", "Value123 : " + result);
    }
     if(r==1)
    {
      System.out.println("hello1");
      func1();
    }
  }

  @Override
  protected void onPause() {
    super.onPause();

    if (hasCameraPermission) {

      // Cleanup in onPause()
      // --------------------
      qrEader.releaseAndCleanup();
    }
  }

  @Override
  protected void onResume() {
    super.onResume();
    System.out.println("hello");
    func1();
    if (hasCameraPermission) {

      // Init and Start with SurfaceView
      // -------------------------------
      qrEader.initAndStart(mySurfaceView);

    }
  }
  public void func1()
  {
    //String url = "https://www.mocky.io/v2/5185415ba171ea3a00704eed";
    System.out.println("fesgsegsdgfsdgdfgdsg");
//
    Thread thread = new Thread(new Runnable() {
      @Override
      public void run() {
        try {
          System.out.println(result);
          String url1="http://10.2.21.1:5000/visitation/update";
          URL url = new URL(url1);
          HttpURLConnection conn = (HttpURLConnection) url.openConnection();
          conn.setRequestMethod("POST");
          conn.setRequestProperty("Content-Type", "application/json;charset=UTF-8");
          conn.setRequestProperty("Accept","application/json");
          conn.setDoOutput(true);
          conn.setDoInput(true);

          JSONObject jsonParam = new JSONObject();
          jsonParam.put("visitId", result);
          jsonParam.put("firstName", fn);



          Log.i("JSON", jsonParam.toString());
          DataOutputStream os = new DataOutputStream(conn.getOutputStream());
          //os.writeBytes(URLEncoder.encode(jsonParam.toString(), "UTF-8"));
          os.writeBytes(jsonParam.toString());

          conn.disconnect();
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    });

    thread.start();
  }

}



